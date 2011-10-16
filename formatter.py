class Formatter:
    def __init__(self, indentation=0):
        self.indent = ' ' * indentation
        self.result = ''

    def addLine(self, *args):
        self.result += self.indent + ''.join(args) + '\n'
        return self

    def newLine(self):
        self.result += '\n'
        return self

    def getResult(self):
        return self.result
