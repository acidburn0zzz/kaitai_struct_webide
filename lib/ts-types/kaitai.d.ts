declare class YAML {
    static parse(yaml: string): any;
}

interface IYamlImporter {
    importYaml(name: string, mode: string): Promise<string>;
}

declare class KaitaiStructCompiler {
    version: string;
    buildDate: string;
    compile(kslang: string, compilerSchema: any, jsImporter: IYamlImporter, isDebug: boolean): Promise<{ [filename: string]: string }>;
}

declare module "kaitai-struct-compiler" {
    export = KaitaiStructCompiler;
}

declare class KaitaiStream {
    constructor(inputBuffer: ArrayBuffer, offset: number);
}
