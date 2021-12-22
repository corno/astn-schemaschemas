import * as astn from "astn";
interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void;
}
export declare type __involved_team_members_T = {};
export declare type __High_T = {};
export declare type __Low_T = {};
export declare type __Medium_T = {};
export declare type __priority_TU = ["High", __High_T] | ["Low", __Low_T] | ["Medium", __Medium_T];
export declare type __tasks_T = {
    readonly "action holder": string;
    readonly "cost": string;
    readonly "description": string;
    readonly "enddate": string;
    readonly "involved team members": IDictionary<__involved_team_members_T>;
    readonly "priority": __priority_TU;
    readonly "startdate": string;
};
export declare type __projects_T = {
    readonly "tasks": IDictionary<__tasks_T>;
};
export declare type __root_T = {
    readonly "projects": IDictionary<__projects_T>;
};
export declare type __involved_team_members_B = {};
export declare type __High_B = {};
export declare type __Low_B = {};
export declare type __Medium_B = {};
export declare type __priority_TU_Builder = ["High", __High_B] | ["Low", __Low_B] | ["Medium", __Medium_B];
export declare type __tasks_B = {
    readonly "action holder"?: string;
    readonly "cost"?: string;
    readonly "description"?: string;
    readonly "enddate"?: string;
    readonly "involved team members"?: {
        [key: string]: __involved_team_members_B;
    };
    readonly "priority"?: __priority_TU_Builder;
    readonly "startdate"?: string;
};
export declare type __projects_B = {
    readonly "tasks"?: {
        [key: string]: __tasks_B;
    };
};
export declare type __root_B = {
    readonly "projects"?: {
        [key: string]: __projects_B;
    };
};
export declare function createDeserializer<TokenAnnotation>(context: astn.IExpectContext<TokenAnnotation>, raiseValidationError: (message: string, annotation: TokenAnnotation) => void, callback: (result: __root_T) => void): astn.IRequiredValueHandler<TokenAnnotation>;
export declare function createBuilder<TokenAnnotation>(intermediate: __root_B): __root_T;
export {};
