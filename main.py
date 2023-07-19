from PIL import Image, ImageDraw, ImageFont
import hashlib
import os
from mkdocs.structure.files import File


def define_env(env):

    @env.macro
    def console(description, txt):
        # Check if image exists already and has the same hash, if so, return the image
        hash = description + txt
        hash = hashlib.md5(hash.encode('utf-8')).hexdigest()
        file_path = os.path.join('images', 'console_gen_' + hash + '.png')
        p = os.path.dirname(env.page.url).split("/")[:-1]
        relative_path = os.path.join(*p, file_path)
        p = os.path.join("docs", *p, file_path)

        documentation_image_path = '![' + description + \
            '](' + file_path + " \"" + description + "\")"
        if os.path.isfile(p):
            return documentation_image_path

        font_size = 16

        mono_font = ImageFont.truetype(
            "DejaVuSansMono.ttf", font_size, index=0)
        img = Image.new('RGB', (10, 10), color=(0, 0, 0))
        draw = ImageDraw.Draw(img)
        (_, _, width, height) = draw.multiline_textbbox(
            (0, 0), txt, font=mono_font, align="left")
        img = img.resize((width + 20, height + 20))
        draw = ImageDraw.Draw(img)
        draw.fontmode = "0"
        draw.text((10, 10), txt, fill=(255, 255, 255), font=mono_font)
        img.save(p)
        print("Generated image: " + p)

        with open("temp.txt", "a") as f:
            f.write(relative_path + "\n")
        return documentation_image_path


def on_page_markdown(_, page, config, files):
    if os.path.exists("temp.txt"):
        with open("temp.txt", "r") as f:
            for line in f:
                file = File(path=line.strip(), src_dir=config.docs_dir,
                            dest_dir=config.site_dir, use_directory_urls=False)
                files.append(file)

        # Clear temp file
        os.remove("temp.txt")
