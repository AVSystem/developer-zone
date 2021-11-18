# Implementing LwM2M objects on RaspberryPi using Svetovid


## Introduction

Svetovid is a LwM2M client that gives you tools to implement selected LwM2M objects for RaspberryPi-based IoT devices. The Python programming language is used to implement LwM2M objects. Svetovid is based on a state-of-the-art client called Anjay and developed by AVSystem.
It features the FSDM (File System Data Model) in which LwM2M objects are mapped to folders that follow a particular schema, and executables behave as expected by the LwM2M client that loads and manages them.

This tutorial will show you how to implement a temperature LwM2M object on your device and

## Prerequisites

- Raspberry Pi 3 or 4 with a configured operating system and WiFi
- A [Sense Hat](https://www.raspberrypi.org/products/sense-hat/) or a [Grove Pi](https://www.seeedstudio.com/GrovePi.html) with a temperature sensor.
- An active Coiote IoT Device Management user account with Cloud admin permissions.

## Step 1: Prepare your SenseHat

1. Install SenseHat packages:
`sudo apt-get install sense-hat`

2. Check if SenseHat is working correctly:
   - Create a `hello_world.py` file:
				```
				from sense_hat import SenseHat
				sense = SenseHat()
				sense.show_message("Hello World!")
				```
3. Run the program:
`python hello_world.py`


!!!note
   A tutorial on SenseHat is available here: https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat

## Step 2: Install Svetovid

1. To install Svetovid, paste and execute the following commands into your :

```
mkdir ~/AVSystem
cd /home/pi/AVSystem
git clone https://github.com/AVSystem/Svetovid-raspberry-client.git
cd /home/pi/AVsystem/Svetovid-raspberry-client
cd ~/AVSystem/Svetovid-raspberry-client
sudo dpkg -i svetovid_20.11-raspberry_armhf.deb
sudo dpkg -i svetovid-plugin-fsdm_20.11-raspberry_armhf.deb
sudo dpkg -i avsystem_svetovid-20.11-raspberry-Linux-fsdmtool-runtime-python.deb
```


## Step 3: Register your device in Coiote DM

1. Disable the Svetovid service:
`sudo systemctl disable svetovid.service --now`

2. Set the server connection details:

		- in `/etc/svetovid/config/security.json`
			```
				{
					"1":
					{
				    	"ssid": "1",
				    	"server_uri": "coaps://lwm2m-test.avsystem.io:5684",
				    	"is_bootstrap": "0",
				    	"security_mode": "psk",
				    	"pubkey_or_identity_hex": "XXXX",
				    	"privkey_or_psk_hex": "XXXX",
				    	"server_pubkey_hex": "",
				    	"holdoff_s": "0",
				    	"bs_timeout_s": "0"
					}
				}
			```

			- in `/etc/svetovid/config/svd.json`:
			```
				{
					"device": {
				    	"endpoint_name": "YYYY",
				    	"udp_listen_port": 1234
					},
					"logging": {
				    	"default_log_level": "trace",
				    	"log_level": {
				        	"svd": "trace"
				    	}
					},
					"lwm2m_version_config": {
				    	"min": "1.0",
				    	"max": "1.1"
					},
					"in_buffer_size_b": 1024,
					"out_buffer_size_b": 1024,
					"msg_cache_size_b": 65536
				}
			```
        -

!!! note
    XXXX and YYYY should be replaced by the chosen values of endpoint name, PSK identity and PSK key.

!!! note XXXX values are in hex
    `echo -n 'text-value' | xxd -p`

3. Restart the Svetovid service:
`sudo systemctl start svetovid.service --now`


4. Create a device instance in Coiote DM:
    - When logged into your Coiote DM user account, go to Device Inventory and click **Add a device**.
    - Provide Device ID, Key Identity and Key values as in the Svetovid config files from the earlier step.
		- Wait for the connection.

![Add device](images/add_device.png "add device")

5. Analyze the objects exposed by the device.

Your RaspberryPi-based device will feature a number of default LwM2M objects provided by Svetovid.  

## Step 5: Implement the LwM2M temperature object(/ID3303)

LwM2M objects are... OMA DM itd


Type in the terminal:
$ sudo svetovid-fsdmtool generate --object 3201 --output-dir /etc/svetovid/dm --generator python

Analyze the resource implementation in the /etc/svetovid/dm/3201 folder. More details https://github.com/AVSystem/Svetovid-raspberry-client.

Type in the terminal:
$ cd /etc/svetovid/dm/3201/resources
 ./5550 write

!!! hint
    After providing 0 or 1 value, press Ctrl+D (EOF).

Modify the /etc/svetovid/dm/3201/resources/5550 file
#!/usr/bin/env python3
# -*- encoding: utf-8 -*-

from fsdm import ResourceHandler, CoapError, DataType, KvStore
from sense_hat import SenseHat

import sys

class ResourceHandler_3201_5550(ResourceHandler):
	NAME = "Digital Output State"
	DESCRIPTION = '''\
The current state of a digital output.'''
	DATATYPE = DataType.BOOLEAN
	EXTERNAL_NOTIFY = False

	def __init__(self):
    	self.sense = SenseHat()

	def read(self,
         	instance_id,        	# int
         	resource_instance_id):  # int for multiple resources
                                    # None otherwise
    	# print value to stdout
    	pixel = self.sense.get_pixel(instance_id, 0)
    	print(pixel[0]//255)


	def write(self,
          	instance_id,        	# int
          	resource_instance_id):  # int for multiple resources
                                    # None otherwise
    	# read value from stdin
    	val=int(sys.stdin.read())
    	self.sense.set_pixel(instance_id, 0, 255*val, 255*val, 255*val)

	def reset(self,
          	instance_id):  # int
    	# TODO: reset resource to its original state.
      # You can either set it to
    	# a default value or delete the resource.
    	pass


if __name__ == '__main__':
	ResourceHandler_3201_5550().main()


Restart svetovid
# sudo systemctl restart svetovid.service --now

Refresh device state and change the state of the object on the server side

LwM2M object implementation (/ID3347)
Object Push Button (/ID3347)

Type in the terminal:
``$ sudo svetovid-fsdmtool generate --object 3347 --output-dir /etc/svetovid/dm --generator python`

Analyze the resource implementation in the /etc/svetovid/dm/3347 folder. More details https://github.com/AVSystem/Svetovid-raspberry-client.

Type in the terminal:
$ cd /etc/svetovid/dm/3347/resources
 ./5550 read

In home directory create the file ~/button_object_forwarder.py:
from sense_hat import SenseHat
from time import sleep
#from fsdm import KvStore
sense = SenseHat()

sense.clear()

#KvStore(namespace=3347).set('counter', 0)
#KvStore(namespace=3347).set('state', False)

released_before = False

while True:
  for event in sense.stick.get_events():
	if event.action == "pressed":
  	if event.direction == "middle":
    	sense.show_letter("M")
#    	KvStore(namespace=3347).set('state', True)

#    	if released_before:
#        	counter = KvStore(namespace=3347).get('counter')
#        	KvStore(namespace=3347).set('counter', counter+1)

    	released_before = False

	elif event.action == "released":
  	if event.direction == "middle":
    	sense.show_letter("m")
#    	KvStore(namespace=3347).set('state', False)
    	released_before = True
	else:
    	sense.clear()

	# Wait and clear the screen
#	sleep(0.5)
#	sense.clear()





Modify the /etc/svetovid/dm/3347/resources/5500 file:
#!/usr/bin/env python3
# -*- encoding: utf-8 -*-

from fsdm import ResourceHandler, CoapError, DataType, KvStore


class ResourceHandler_3347_5500(ResourceHandler):
	NAME = "Digital Input State"
	DESCRIPTION = '''\
The current state of a digital input.'''
	DATATYPE = DataType.BOOLEAN
	EXTERNAL_NOTIFY = False

	def read(self,
         	instance_id,        	# int
         	resource_instance_id):  # int for multiple resources, None otherwise
    	# TODO: print value to stdout
    	print(0)




if __name__ == '__main__':
	ResourceHandler_3347_5500().main()





Modify the /etc/svetovid/dm/3347/resources/5501 file:
#!/usr/bin/env python3
# -*- encoding: utf-8 -*-

from fsdm import ResourceHandler, CoapError, DataType, KvStore


class ResourceHandler_3347_5501(ResourceHandler):
	NAME = "Digital Input Counter"
	DESCRIPTION = '''\
The cumulative value of active state detected.'''
	DATATYPE = DataType.INTEGER
	EXTERNAL_NOTIFY = False

	def read(self,
         	instance_id,        	# int
         	resource_instance_id):  # int for multiple resources, None otherwise
    	# TODO: print value to stdout
    	print(0)




if __name__ == '__main__':
	ResourceHandler_3347_5501().main()


Restart svetovid
# sudo systemctl restart svetovid.service --now

Refresh device state and change the state of the object on the server side
