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
import { ExtractionTaskWhereInput } from "./ExtractionTaskWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExtractionTaskListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExtractionTaskWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractionTaskWhereInput)
  @IsOptional()
  @Field(() => ExtractionTaskWhereInput, {
    nullable: true,
  })
  every?: ExtractionTaskWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExtractionTaskWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractionTaskWhereInput)
  @IsOptional()
  @Field(() => ExtractionTaskWhereInput, {
    nullable: true,
  })
  some?: ExtractionTaskWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExtractionTaskWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractionTaskWhereInput)
  @IsOptional()
  @Field(() => ExtractionTaskWhereInput, {
    nullable: true,
  })
  none?: ExtractionTaskWhereInput;
}
export { ExtractionTaskListRelationFilter as ExtractionTaskListRelationFilter };
