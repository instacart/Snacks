export declare function supportsCSSGrid(): boolean

export declare function isNodeEnv(): boolean

export declare function isTestEnv(): boolean

declare const detectFeature: {
  supportsCSSGrid: typeof supportsCSSGrid
  isNodeEnv: typeof isNodeEnv
  isTestEnv: typeof isTestEnv
}

export default detectFeature
