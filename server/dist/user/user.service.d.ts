import { UserRepository } from "./user.repository";
import { SignUpDto } from "./dto/sign-up.dto";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "../entity/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UserInfo } from "./user-info.interface";
import { ConfirmPasswordDto } from "./dto/confirm-password.dto";
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    getUserEntity(id: string): Promise<User>;
    saveUserEntity(user: User): Promise<void>;
    extractPublicInfo(user: User): UserInfo;
    getUserInfo(userId: string): Promise<UserInfo>;
    updateUser(user: User, updateUserDto: UpdateUserDto): Promise<void>;
    updatePassword(user: User, updatePasswordDto: UpdatePasswordDto): Promise<void>;
    withdraw(user: User, confirmPasswordDto: ConfirmPasswordDto): Promise<void>;
}
