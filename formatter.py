class Formatter:
    def __init__(self, indentation=0):
        self.indent = ' ' * indentation
        self.result = ''

    def add(self, *args):
        self.result += ''.join(args)
        return self

    def addLine(self, *args):
        return self.add(self.indent).add(''.join(args)).newLine()

    def newLine(self):
        return self.add('\n')

    def getResult(self):
        return self.result
