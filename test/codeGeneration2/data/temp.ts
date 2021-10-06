/* eslint
    "camelcase": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unused-vars": 0,
*/

type root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = { [key: string]: root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G }

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU =
    | root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G
    | root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G
    | root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G

type root_B_T_G_projects_P_D_G_tasks_P_D_G = {
    readonly "action holder"?: string
    readonly "cost"?: number
    readonly "description"?: string
    readonly "enddate"?: string
    readonly "involved team members"?: root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D
    readonly "priority"?: root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU
    readonly "startdate"?: string
}

type root_B_T_G_projects_P_D_G_tasks_P_D = { [key: string]: root_B_T_G_projects_P_D_G_tasks_P_D_G }

type root_B_T_G_projects_P_D_G = {
    readonly "tasks"?: root_B_T_G_projects_P_D_G_tasks_P_D
}

type root_B_T_G_projects_P_D = { [key: string]: root_B_T_G_projects_P_D_G }

type root_B_T_G = {
    readonly "projects"?: root_B_T_G_projects_P_D
}

type root_B_T = root_B_T_G

type root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = { [key: string]: root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G }

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU =
    | root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G
    | root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G
    | root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G

type root_T_T_G_projects_P_D_G_tasks_P_D_G = {
    readonly "action holder": string
    readonly "cost": number
    readonly "description": string
    readonly "enddate": string
    readonly "involved team members": root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D
    readonly "priority": root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU
    readonly "startdate": string
}

type root_T_T_G_projects_P_D_G_tasks_P_D = { [key: string]: root_T_T_G_projects_P_D_G_tasks_P_D_G }

type root_T_T_G_projects_P_D_G = {
    readonly "tasks": root_T_T_G_projects_P_D_G_tasks_P_D
}

type root_T_T_G_projects_P_D = { [key: string]: root_T_T_G_projects_P_D_G }

type root_T_T_G = {
    readonly "projects": root_T_T_G_projects_P_D
}

type root_T_T = root_T_T_G

function createBuilder_F() { }

export interface deserialize_ExpectContext_I<NonTokenAnnotation, TokenAnnotation> { }

export interface deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
    exists: deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    missing(): void
}

export interface deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> { }

export function deserialize_createDeserializer_F<NonTokenAnnotation, TokenAnnotation>(
    callback: (
        result: root_T_T,
    ) => void,
    context: deserialize_ExpectContext_I<NonTokenAnnotation, TokenAnnotation>,
    raiseValidationError: (
        annotation: TokenAnnotation,
        message: string,
    ) => void,
): deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
    function root_F() { }
    throw new Error("FIXME")
}