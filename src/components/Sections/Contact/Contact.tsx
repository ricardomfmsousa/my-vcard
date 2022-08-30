import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import fetchJsonp from "fetch-jsonp";
import { useFormik } from "formik";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import * as yup from "yup";

import {
  SectionTemplate,
  SectionTemplateProps,
} from "../SectionTemplate/SectionTemplate";

export interface ContactProps {
  variant: SectionTemplateProps["variant"];
  [rest: string]: unknown;
}

export const Contact: React.FC<ContactProps> = ({
  variant,
  ...rest
}): JSX.Element => {
  const { t } = useI18next();
  const { palette } = useTheme();
  const [showNotification, setShowNotification] = React.useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = React.useState(false);

  const googleFormUrl =
    "https://docs.google.com/forms/u/0/d/e/" +
    "1FAIpQLSfpal1vZ6teMo55NMhUT9gdlkhysU_UGsP5e2mFWFwhEFUNzA/formResponse";
  const contactValidationSchema = yup.object({
    name: yup.string().required(t("Name is required")),
    email: yup
      .string()
      .email(t("Enter a valid email"))
      .required(t("Email is required")),
    message: yup
      .string()
      .min(20, t("A meaningful message should have more than 20 characters :)"))
      .required(t("Message is required")),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: contactValidationSchema,
    onSubmit: async ({ name, email, message }, { resetForm }) => {
      setIsFormSubmitting(true);
      const googleFormData = {
        "entry.145718268": name,
        "entry.1709139572": email,
        "entry.750194608": message,
      };
      try {
        const encodedData = new URLSearchParams(googleFormData).toString();
        await fetchJsonp(`${googleFormUrl}?${encodedData}`, {
          timeout: 3000,
          nonce: "",
          referrerPolicy: "",
        });
      } catch (e) {
        // Nothing to do here, errors will be thrown,
        // even though the call is successful
      }
      resetForm();
      setShowNotification(true);
      setIsFormSubmitting(false);
    },
  });

  const handleNotificationClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowNotification(false);
  };

  return (
    <SectionTemplate
      id="contact"
      variant={variant}
      title={t("Contact")}
      subtitle={t("Get in touch")}
      {...rest}
    >
      <Stack
        component="fieldset"
        disabled={isFormSubmitting}
        direction={{ sm: "column", md: "row" }}
        spacing={8}
        sx={{ mx: 0, border: "none" }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "flex" } }}
          />
        }
      >
        <Typography
          sx={{ textAlign: "justify", flex: 0.5, my: 1, mb: { xs: 5, md: 0 } }}
        >
          <Trans>
            Feel free to contact me through this form, I will reply to all
            messages that originate from here in the shortest possible time.
          </Trans>
          <br />
          <br />
          <Box component="span" sx={{ color: palette.text.secondary }}>
            <Trans>
              Note: I've stopped replying to all LinkedIn messages a few years
              ago, since I get <strong>too many templated messages</strong> from
              recruiters that clearly haven't read my profile.
            </Trans>
          </Box>
        </Typography>
        <Stack
          component="form"
          sx={{
            marginTop: "0 !important",
            "& > :not(style)": { my: 1 },
            flex: 0.5,
          }}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <FormControl>
            <TextField
              id="name"
              name="name"
              label={t("Name")}
              variant="outlined"
              placeholder={"Jane Doe"}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="email"
              name="email"
              label={t("Email")}
              placeholder="janedoe@example.com"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="message"
              name="message"
              label={t("Message")}
              placeholder={t("Meaningful message")}
              variant="outlined"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </FormControl>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {isFormSubmitting && <CircularProgress size={24} />}
            <Button
              type="submit"
              variant="outlined"
              disabled={isFormSubmitting}
              sx={{ flex: { xs: 0.4, sm: 0.15, md: 0.1 } }}
            >
              <Trans>Send</Trans>
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showNotification}
        autoHideDuration={7000}
        onClose={handleNotificationClose}
      >
        <Alert
          onClose={handleNotificationClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          <Trans>Thank you for your contact!</Trans>
        </Alert>
      </Snackbar>
    </SectionTemplate>
  );
};
