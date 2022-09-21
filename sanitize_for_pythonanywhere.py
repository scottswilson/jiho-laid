import os
import fileinput

cwd = os.getcwd()
for path, dirs, files in os.walk(os.path.join(cwd, "build")):
  for file in files:
    for line in fileinput.input(os.path.join(path, file), inplace=True):
      line = line.replace("static/", "welcome/static/jiho/static/")
      # print('{} {}'.format(fileinput.filelineno(), line), end='')
      print "%s" % (line)