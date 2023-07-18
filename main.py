from PIL import Image, ImageDraw, ImageFont


def define_env(env):

    image_number = 0
    @env.macro
    def console(description, txt):
        nonlocal image_number
        file_path = 'assets/images/console_gen_' + str(image_number) + '.png'
        print(env.page)
        font_size = 16

        mono_font = ImageFont.truetype("DejaVuSansMono.ttf", font_size, index=0)
        img = Image.new('RGB', (10, 10), color = (0, 0, 0))
        draw = ImageDraw.Draw(img)
        (_, _, width, height) = draw.multiline_textbbox((0, 0), txt, font=mono_font, align="left")
        img = img.resize((width + 20, height + 20))
        draw = ImageDraw.Draw(img)
        draw.fontmode = "0"
        draw.text((10, 10), txt, fill =(255, 255, 255), font = mono_font)
        img.save("overrides/" + file_path)
        img.save("site/" + file_path)
        image_number += 1
        return '!['+ description + '](/' + file_path +  " \"" + description + "\")"
