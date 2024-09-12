/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaleCoinTransactionWhereInput } from "./TaleCoinTransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TaleCoinTransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TaleCoinTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => TaleCoinTransactionWhereInput)
  @IsOptional()
  @Field(() => TaleCoinTransactionWhereInput, {
    nullable: true,
  })
  every?: TaleCoinTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaleCoinTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => TaleCoinTransactionWhereInput)
  @IsOptional()
  @Field(() => TaleCoinTransactionWhereInput, {
    nullable: true,
  })
  some?: TaleCoinTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaleCoinTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => TaleCoinTransactionWhereInput)
  @IsOptional()
  @Field(() => TaleCoinTransactionWhereInput, {
    nullable: true,
  })
  none?: TaleCoinTransactionWhereInput;
}
export { TaleCoinTransactionListRelationFilter as TaleCoinTransactionListRelationFilter };
