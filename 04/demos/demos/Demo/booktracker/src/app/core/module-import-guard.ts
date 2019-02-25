// Prevent a module from being imported more than once.
// See CoreModule constructor for example on how to use.
export function throwIfAlreadyLoaded(parentModule: any, moduleName:string) {
  if(parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
