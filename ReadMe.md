# Setup
1. Clone the https://github.com/AVSystem/developer-zone repo.
1. Check out on master and run `pip3 install -r requirements.txt`

# Usage
* Development: `mkdocs serve` - serves a preview of docs in 127.0.0.1:8000
* Build: `mkdocs build` - builds the docs in the `/site` catalog.

# Custom-config documentation

The default Mkdocs configuration is in the `mkdocs.yml` file.
Thus, `mkdocs build` is equivalent to `mkdocs build -f mkdocs.yml`.
To build, for example, a customer-specific documentation, use another configuration file instead:
`mkdocs build -f custom.yml`.
A customer-specific configuration can have changed TOC, added styles, etc.
It's technically a completely separate documentation that just happens to share most of the sources.

# Open pull requests

If you have contributed to the IoTDevZone, create a pull request and assign the Lead Technical Writer as a reviewer.

1. In the github developer zone repo, go to the **Pull requests** tab.
1. Click **New pull request**.
1. From the **compare** branch list, select your branch and click **Create pull request**.
1. As a reviewer, add the Lead Technical Writer for Coiote DM.
