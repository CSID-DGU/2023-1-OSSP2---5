import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Patch,
    Post,
    Put,
    UseGuards,
    ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "./get-user.decorator";
import { User } from "../entity/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ConfirmPasswordDto } from "./dto/update-password.dto";
import { UserInfo } from "./user-info.interface";
import { EncodedImgValidationPipe } from "src/pipe/encoded-img-validation.pipe";

@Controller("user")
export class UserController {
    private logger = new Logger("UserController");

    constructor(private userService: UserService) {}

    @Post("/signup")
    signUp(@Body(ValidationPipe, EncodedImgValidationPipe) signUpDto: SignUpDto): Promise<void> {
        this.logger.verbose(`"${signUpDto.email}" trying to sign up.`);
        return this.userService.signUp(signUpDto);
    }

    @Post("/signin")
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        this.logger.verbose(`"${authCredentialsDto.email}" trying to sign in.`);
        return this.userService.signIn(authCredentialsDto);
    }

    @Get("/info")
    @UseGuards(AuthGuard())
    getMyInfo(@GetUser() user: User): UserInfo {
        this.logger.verbose(`"${user.email}" trying to get personal information.`);
        return this.userService.extractPublicInfo(user);
    }

    @Get("/info/:id")
    @UseGuards(AuthGuard())
    getUserInfo(@Param("id") userId: string): Promise<UserInfo> {
        this.logger.verbose(`User trying to get information of "${userId}".`);
        return this.userService.getUserInfo(userId);
    }

    @Put("/update/info")
    @UseGuards(AuthGuard())
    updateUser(
        @GetUser() user: User,
        @Body(ValidationPipe, EncodedImgValidationPipe) updateUserDto: UpdateUserDto,
    ): Promise<void> {
        this.logger.verbose(`"${user.email}" trying to update personal information.`);
        return this.userService.updateUser(user, updateUserDto);
    }

    @Patch("/update/password")
    @UseGuards(AuthGuard())
    updatePassword(@GetUser() user: User, @Body(ValidationPipe) confirmPasswordDto: ConfirmPasswordDto): Promise<void> {
        this.logger.verbose(`"${user.email}" trying to update password.`);
        return this.userService.updatePassword(user, confirmPasswordDto);
    }

    @Delete("/withdraw")
    @UseGuards(AuthGuard())
    withdraw(@GetUser() user: User, @Body(ValidationPipe) confirmPasswordDto: ConfirmPasswordDto): Promise<void> {
        this.logger.verbose(`"${user.email}" trying to withdraw from this service.`);
        return this.userService.withdraw(user, confirmPasswordDto);
    }
}
