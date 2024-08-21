import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('profile')
export class ProfileController {
    @UseGuards(JwtAuthGuard)
    @Get()
    getProfile() {
        return { message: 'This is a protected route' };
    }
}