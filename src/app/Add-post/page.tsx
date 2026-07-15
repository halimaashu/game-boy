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
import { postCommunityPost } from "@/lib/actions/communitypost";
import { authClient } from "@/lib/auth-client";
const AddCommunityPostPage = () => {
      const { data: session } = authClient.useSession()
      const user=session?.user;
      console.log(user,"from my post page")
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    const allDataForPost={...data,authorImage:user?.image,authorName:user?.name,authorEmail:user?.email,like:0,comment:[]}
    const postData = await postCommunityPost(allDataForPost);
    if (postData) {
      alert("post success");
    }

   
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
          className="flex flex-col gap-6 shadow-2xl p-5 sm:p-8 rounded-xl bg-[#1f1f24]"
          onSubmit={onSubmit}
        >
          {/* Title */}
          <TextField isRequired name="title">
            <Label className="text-sm font-semibold text-zinc-300">
              Post Title
            </Label>
            <Input placeholder="Enter post title"  className={"text-white"}/>
          </TextField>

          {/* Game Name */}
          <TextField isRequired name="game">
            <Label className="text-sm font-semibold text-zinc-300">
              Game Name
            </Label>
            <Input placeholder="Valorant, PUBG, Free Fire..." className={"text-white"}/>
          </TextField>

          {/* Thumbnail */}
          <TextField isRequired name="thumbnail">
            <Label className="text-sm font-semibold text-zinc-300">
              Thumbnail URL
            </Label>
            <Input placeholder="https://example.com/image.jpg" className={"text-white"} />
          </TextField>

          {/* Description */}
          <TextField isRequired name="description">
            <Label className="text-sm font-semibold text-zinc-300">
              Description
            </Label>
            <Input placeholder="Write your community post..." className={"text-white"} />
          </TextField>

          {/* Category */}
          <RadioGroup
            name="category"
            defaultValue="discussion"
            className="flex flex-col gap-3"
          >
            <Label className="text-white font-semibold">Category</Label>

            <div className="grid grid-cols-2 gap-3">
              <Radio value="discussion">
                <Radio.Content className={"text-white"}>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Discussion
                </Radio.Content>
              </Radio>

              <Radio value="tips">
                <Radio.Content className={"text-white"}>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Tips
                </Radio.Content>
              </Radio>

              <Radio value="bug Report">
                <Radio.Content className={"text-white"}>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Bug Report
                </Radio.Content>
              </Radio>

              <Radio value="team Recruitment">
                <Radio.Content className={"text-white"}>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Team Recruitment
                </Radio.Content>
              </Radio>
            </div>
          </RadioGroup>

          {/* Game Mode */}
          <RadioGroup
            name="gameMode"
            defaultValue="Online"
            className="flex flex-col gap-3"
          >
            <Label className="text-white font-semibold">Game Mode</Label>

            <div className="grid grid-cols-2 gap-3">
              <Radio  value="Online">
                <Radio.Content className={"text-white"}>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Online
                </Radio.Content>
              </Radio>

              <Radio value="Offline">
                <Radio.Content className={"text-white"}>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Offline
                </Radio.Content>
              </Radio>
            </div>
          </RadioGroup>

          {/* Platform */}
          <TextField isRequired name="platform">
            <Label className="text-sm font-semibold text-zinc-300">
              Platform
            </Label>
            <Input placeholder="PC / Mobile / PlayStation / Xbox"className={"text-white"} />
          </TextField>

          {/* Tags */}
          <TextField name="tags">
            <Label className="text-sm font-semibold text-zinc-300">Tags</Label>
            <Input placeholder="FPS, Ranked, Tournament" className={"text-white"} />
            <Description className="text-xs text-zinc-400">
              Separate multiple tags with commas.
            </Description>
          </TextField>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              className="flex-1 bg-red-700 hover:bg-red-600 text-white"
            >
              Add Community Post
            </Button>

            <Button type="reset">Reset</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddCommunityPostPage;
