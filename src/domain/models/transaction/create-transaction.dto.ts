import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPositive, Min } from 'class-validator';
// import { TransactionType } from 'src/core';

export class CreateTransactionDto {
  @ApiProperty({ type: Number })
  @IsPositive()
  @Min(1)
  public amount: number;

  @ApiProperty({ type: String, example: 'cool@email.com' })
  @IsEmail()
  public receiverEmail: string;

  @ApiProperty({
    type: String,
    description: 'Transaction category',
    example: 'food',
  })
  public category: string;
}
