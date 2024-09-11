import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";


export const getProveedor=createParamDecorator((data,ctx:ExecutionContext)=>{
    const req=ctx.switchToHttp().getRequest();
    const proveedor= req.user;
    if(!proveedor) throw new InternalServerErrorException('Supplier not found');

    return proveedor;
});