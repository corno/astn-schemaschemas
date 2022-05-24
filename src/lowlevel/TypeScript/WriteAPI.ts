
export interface Block {
    line: (callback: (line: Line) => void) => void
}

export interface Line {
    snippet: (str: string) => void
    indent: (callback: (block: Block) => void) => void
}