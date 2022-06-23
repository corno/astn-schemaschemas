import * as fs from "fs"

export function readFileSync(path: string): string {
    return fs.readFileSync(path, { encoding: "utf-8" })
}

export function readFile(
    path: string,
    onEnd: (
        $:
            | ["error", {
                type:
                | ["is directory", {}]
                | ["no entity", {}]
                | ["other", {
                    message: string
                }]
            }]
            | ["success", {
                data: string
            }]
    ) => void
): void {
    fs.readFile(
        path,
        { encoding: "utf-8" },
        (err, data) => {
            if (err !== null) {
                throw new Error("IMPLEMENT ME")
            } else {
                onEnd(["success", {
                    data: data
                }])
            }
        }
    )
}

export function writeFile(
    path: string,
    data: string,
    onEnd: (err: null | string) => void
) {
    fs.writeFile(
        path,
        data,
        { encoding: "utf-8"},
        () => {
            onEnd(null)
        }
    )
}

export function writeFileSync(
    path: string,
    data: string,
) {
    fs.writeFileSync(
        path,
        data,
        { encoding: "utf-8"}
    )
}

export function mkdir(
    path: string,
    onEnd: (
        result:
            | ["error", {}]
            | ["success", {}]
    ) => void
) {
    fs.mkdir(
        path,
        (err) => {
            onEnd(err === null ? ["success", {}] : ["error", {}])
        }
    )
}
export function unlinkSync(
    path: string,
) {
    fs.unlinkSync(
        path
    )
}