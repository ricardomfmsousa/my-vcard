import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import {
  Alert,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import fetchJsonp from "fetch-jsonp";
import { useFormik } from "formik";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import { useBotFilter } from "../../../hooks/useBotFilter/useBotFilter";
import { NavLink } from "../../NavLink/NavLink";
import { Social } from "../../Social/Social";
import {
  SectionTemplate,
  SectionTemplateProps,
} from "../SectionTemplate/SectionTemplate";
import { getValidationSchema, googleFormUrl } from "./ContactConfig";

export interface ContactProps {
  variant: SectionTemplateProps["variant"];
}

export const Contact = React.forwardRef<SectionTemplateProps, ContactProps>(
  ({ variant }, ref): JSX.Element => {
    const { t } = useI18next();
    const { palette } = useTheme();
    const [isShowingNotification, setShowNotification] = React.useState(false);
    const [isFormSubmitting, setFormSubmitting] = React.useState(false);
    const challengeMessage =
      "Hey!\nYou were really fast filling out this form!\n" +
      "Are you a Bot?\nPlease enter the first letter of your name:";
    const isBot = useBotFilter(t(challengeMessage));

    const formik = useFormik({
      initialValues: { name: "", email: "", message: "" },
      validationSchema: getValidationSchema(t),
      onSubmit: async ({ name, email, message }, { resetForm }) => {
        setFormSubmitting(true);
        if (isBot((r: string) => r.toLowerCase() !== name[0].toLowerCase())) {
          window.location.reload();
          return;
        }
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
        setFormSubmitting(false);
        setShowNotification(true);
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
        ref={ref}
        id="contact"
        variant={variant}
        title={t("Contact")}
        subtitle={t("Get in touch")}
      >
        <Stack
          component="fieldset"
          disabled={isFormSubmitting}
          direction={{ xs: "column-reverse", md: "row" }}
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
          <Stack
            sx={{
              textAlign: "justify",
              flex: 0.5,
              my: 1,
              mb: { xs: 5, md: 0 },
            }}
          >
            <Typography>
              <Trans>
                Feel free to contact me through this form, I will reply to all
                messages that originate from here in the shortest possible time.
              </Trans>
            </Typography>
            <Typography sx={{ color: palette.text.secondary, mt: 3 }}>
              <Trans>
                Given the high amount of contact attempts I receive on a daily
                basis through social media, I will <strong>exclusively </strong>
                reply to messages that are sent from this form.
              </Trans>
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                mt: 6,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <NavLink
                to={
                  "https://www.google.pt/maps/@38.51779,-8.8957548,7430m/data=!3m1!1e3"
                }
                target="_blank"
                language="disable"
                tooltipPlacement="bottom"
                tooltipText={t("See in maps")}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <PlaceOutlinedIcon
                  fontSize="medium"
                  sx={{ color: palette.primary.main, mr: 1 }}
                />{" "}
                Setúbal, Portugal
              </NavLink>
              <Social tooltipPlacement="bottom" direction="row" size="medium" />
            </Stack>
          </Stack>
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
              {!isFormSubmitting && (
                <Tooltip title={t("Protected by myCaptcha")}>
                  <IconButton sx={{ color: "text.disabled", cursor: "help" }}>
                    <SyncLockIcon />
                  </IconButton>
                </Tooltip>
              )}
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
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={isShowingNotification}
          autoHideDuration={10000}
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
  }
);

Contact.displayName = "Contact";
