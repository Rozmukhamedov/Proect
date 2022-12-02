import "./style.css";
import React from "react";
import Button from "components/button";
import emailjs from "@emailjs/browser";
import { useForm } from "@mantine/form";
import CustomInput from "components/input";
import { Container, Grid, JsonInput } from "@mantine/core";

function Form() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      organization: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  const changeSubmit = (e: any) => {
    var templateParams = {
      name: e.name,
      email: e.email,
      phone: e.phone,
      organization: e.organization,
      message: e.message,
    };
    form.reset()

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <form onSubmit={form.onSubmit(changeSubmit)} className="form">
      <Container>
        <h3>Contact us</h3>
        <Grid>
          <Grid.Col sm={6} span={12}>
            <CustomInput
              type={"text"}
              className={"form__input"}
              form={form}
              placeholder={"Name"}
              name={"name"}
            />
          </Grid.Col>
          <Grid.Col sm={6} span={12}>
            <CustomInput
              type={"email"}
              className={"form__input"}
              form={form}
              placeholder={"Email"}
              name={"email"}
            />
          </Grid.Col>
          <Grid.Col sm={6} span={12}>
            <CustomInput
              type={"phone"}
              className={"form__input"}
              form={form}
              placeholder={"Phone"}
              name={"phone"}
            />
          </Grid.Col>
          <Grid.Col sm={6} span={12}>
            <CustomInput
              type={"text"}
              className={"form__input"}
              form={form}
              placeholder={"Organization*"}
              name={"organization"}
            />
          </Grid.Col>
          <Grid.Col sm={12} span={12}>
            <JsonInput
              placeholder="Message"
              minRows={4}
              {...form.getInputProps("message")}
            />
          </Grid.Col>
        </Grid>
        <Button type="submit">Send</Button>
      </Container>
    </form>
  );
}

export default Form;
