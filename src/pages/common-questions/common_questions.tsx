import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionComponent from "./styleQuestionComponent";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { Common_questions_static_data } from "../../config";

const CommonQuestions: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center", padding: "50px 20px" }}>
    <Box
      sx={{
        maxWidth: "860px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4">پرسش‌های متداول</Typography>
      <Typography>
        در این بخش می‌توانید جواب پرسش‌های خود را در زمینه نحوه ثبت سفارش، ارسال
        کالا و شیوه‌های پرداخت، پیدا کنید. چنانچه جواب پرسش شما در این قسمت پیدا
        نشد. در قسمت ارتباط با ما می‌توانید پیام بگذارید تا کارشناسان فروش ما
        جوابگوی شما باشند.
      </Typography>

      {Object.entries(Common_questions_static_data).map(
        ([key, { QCT, data, text, list }]) => (
          <Box key={key}>
            <QuestionComponent text={QCT}>
              {key === "1" &&
                data?.map(({ title, text }, index) => (
                  <Box key={index}>
                    <Typography variant="h6" fontWeight="900">
                      {title}
                    </Typography>
                    <Typography paddingLeft="15px" paddingY="5px">
                      {text}
                    </Typography>
                  </Box>
                ))}
              {key === "2" && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {data?.map(({ strong, text }, index) => (
                    <Typography key={index}>
                      <strong>{strong}</strong>
                      {text}
                    </Typography>
                  ))}
                </Box>
              )}
              {key === "3" && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography>{text}</Typography>
                  <List>
                    {list?.map((item, index) => (
                      <ListItem key={index}>{item}</ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </QuestionComponent>
          </Box>
        )
      )}
    </Box>
  </Box>
);

export default CommonQuestions;
