"""Intègre une copie de secours de procedure_J3D.md dans index.html.
Facultatif : l'appli lit toujours d'abord procedure_J3D.md ; la copie intégrée
ne sert que si le fichier est inaccessible (aperçu, premier lancement hors ligne).
Usage : python build.py   (dans le dossier de l'appli)"""
import re, pathlib
here = pathlib.Path(__file__).parent
md = (here / "procedure_J3D.md").read_text(encoding="utf-8")
assert "</script" not in md.lower(), "Le fichier MD ne doit pas contenir </script>"
html = (here / "index.html").read_text(encoding="utf-8")
html = re.sub(r'(<script type="text/plain" id="embedded-md">)[\s\S]*?(</script>)',
              lambda m: m.group(1) + md + m.group(2), html, count=1)
(here / "index.html").write_text(html, encoding="utf-8")
print("Copie intégrée mise à jour :", len(md), "caractères")
