export interface Formg {
    forms: Form[];
}

export interface Form {
    durum:    boolean;
    mesaj:    string;
    bilgiler: Bilgiler;
}

export interface Bilgiler {
    formId:   string;
    formname: string;
    formhtml: string;
    formjson: Formjson;
    date:     Date;
}

export interface Formjson {
    tag:      string;
    children: FormjsonChild[];
}

export interface FormjsonChild {
    tag:      string;
    children: PurpleChild[];
    html:     string;
}

export interface PurpleChild {
    tag:      string;
    class:    string;
    html:     string;
    children: FluffyChild[];
}

export interface FluffyChild {
    tag:      string;
    html:     string;
    children: TentacledChild[];
}

export interface TentacledChild {
    tag:       string;
    html:      string;
    class?:    string;
    children?: StickyChild[];
}

export interface StickyChild {
    tag:       Tag;
    class:     Class;
    for?:      string;
    html:      string;
    children?: IndigoChild[];
}

export interface IndigoChild {
    tag:          string;
    id?:          string;
    name?:        string;
    type?:        string;
    placeholder?: string;
    class:        string;
    required?:    string;
    html?:        string;
    children?:    IndecentChild[];
    for?:         string;
}

export interface IndecentChild {
    tag:       string;
    html?:     string;
    type?:     string;
    name?:     string;
    id?:       string;
    value?:    string;
    checked?:  string;
    required?: string;
}

export enum Class {
    ControlLabel = "control-label",
    Controls = "controls",
}

export enum Tag {
    Div = "div",
    Label = "label",
}


