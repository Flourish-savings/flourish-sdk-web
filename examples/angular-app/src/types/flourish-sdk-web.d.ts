declare module 'flourish-sdk-web' {
    export function Flourish(
      token: string,
      language: string,
      environment: string,
      genericEventCallback: (data: any) => void
    ): HTMLIFrameElement;
  
    export function signIn(
      access_token: string,
      environment: string
    ): Promise<boolean>;
  }
  