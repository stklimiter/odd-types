
export type CurryChain<func extends (...args: any) => any, list extends [...any[]] = []>
    = list["length"] extends Parameters<func>["length"]
    ? ReturnType<func>
    : (arg: Parameters<func>[list["length"]]) => CurryChain<func, [any, ...list]>