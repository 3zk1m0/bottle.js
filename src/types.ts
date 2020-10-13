
export type RenderEngineFunc = (path: string, locals?:object, callback?:Function) => string;

export interface RenderEngine {
    [index: string]: RenderEngineFunc;
  }

