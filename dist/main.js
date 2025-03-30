"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const permission_check_1 = require("./modules/auth/permission/permission-check");
const token_check_1 = require("./modules/auth/token/token-check");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalGuards(new token_check_1.TokenCheck(reflector));
    app.useGlobalGuards(new permission_check_1.PermissionCheck(reflector));
    app.useGlobalInterceptors(new logging_interceptor_1.ResponseSuccessInterceptor(reflector));
    app.enableCors({
        origin: ['http://localhost:5173', `https://google.com`],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cyber Media')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map