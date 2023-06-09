export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Result>
}

export namespace Authentication {
  export interface Params {
    email: string
    password: string
  }

  export type Result = {
    accessToken: string
    name: string
  }
}
