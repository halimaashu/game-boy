"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Radio,
  RadioGroup,
} from "@heroui/react";

const AddCommunityPostPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen bg-[#16161a] text-white py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
        Add Community Post
      </h1>
      
      {/* 
        Responsive Wrapper:
        - w-full ensures it takes full width on mobile devices.
        - max-w-xl prevents the form from stretching uncomfortably wide on desktops.
      */}
      <div className="w-full max-w-xl">
        <Form
          className="flex flex-col gap-6 shadow-2xl  p-5 sm:p-8 rounded-xl bg-[#1f1f24]"
          onSubmit={onSubmit}
        >
          {/* Title Field */}
          <TextField isRequired name="title" type="text" className="w-full">
            <Label className="text-sm font-semibold text-zinc-300">
              Title
            </Label>
            <Input
              placeholder="Enter post title"
              className="mt-1.5 text-white"
            />
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Thumbnail Field */}
          <TextField
            isRequired
            minLength={8}
            name="thumbnail"
            type="text"
            className="w-full"
          >
            <Label className="text-sm font-semibold text-zinc-300">
              Thumbnail URL
            </Label>
            <Input
              placeholder="Enter thumbnail image URL"
              className="mt-1.5 text-white"
            />
            <Description className="text-xs text-zinc-400 mt-1">
              Must be a valid image URL
            </Description>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Description Field */}
          <TextField name="description" type="text" className="w-full">
            <Label className="text-sm font-semibold text-zinc-300">
              Description
            </Label>
            <Input
              placeholder="Enter post description"
              className="mt-1.5 text-white"
            />
          </TextField>

          {/* Role Selection */}
          <RadioGroup defaultValue="premium" name="plan" className="flex flex-col gap-3 text-white">
            <Label className="text-white text-sm font-semibold">Role selection</Label>
            <Description className="text-zinc-400 text-xs">Choose the role that suits you best</Description>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <Radio value="Of line" className="border border-zinc-700 rounded-lg p-3 custom-radio">
                <Radio.Content className="text-white">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Of Line
                </Radio.Content>
                <Description className="text-zinc-400 text-xs ml-6">It's an offline game</Description>
              </Radio>
             
              <Radio value="On line" className="border border-zinc-700 rounded-lg p-3 custom-radio">
                <Radio.Content className="text-white">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  On Line
                </Radio.Content>
                <Description className="text-zinc-400 text-xs ml-6">It's an online game</Description>
              </Radio>
            </div>
          </RadioGroup>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button type="submit" className="flex-1 font-medium text-white order-1 sm:order-2 bg-red-700 hover:bg-red-600 transition-colors">
              <Check className="mr-1 h-4 w-4" />
              Add Post
            </Button>
            <Button type="reset"  className="font-medium order-2 sm:order-1 text-zinc-300">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddCommunityPostPage;