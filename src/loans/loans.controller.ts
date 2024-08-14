import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoanService } from './loans.service';

@Controller('loans')
export class LoanController {

    constructor(private readonly loanService: LoanService) { }


    @Post()
    createLoan(@Body() createLoanDto: any) {
        return `Loan created for ${createLoanDto.userId}`;
    }

    @Get(':id')
    getLoanStatus(@Param('id') id: string) {
        return `Status of loan ${id}`;
    }
}
