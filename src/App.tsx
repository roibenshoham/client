import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TopBar } from "./common/components/topBar";
import { mainTheme } from "./common/theme/theme";
import PaymentMethods from "./flows/addPaymentDetails/page/paymentMethodsPage";
import { BecomeTeacherPage } from "./flows/becomeTeacher/page/becomeTeacherPage";
import { CallsHistoryPage } from "./flows/callsHistory/page/callsHistory";
import { ChatPage } from "./flows/chat/chat";
import { EarningsPage } from "./flows/earnings/page/earningsPage";
import { EditAvailabilityPage } from "./flows/editAvailability/page/editAvailabilityPage";
import { LandingPage } from "./flows/landing/landing";
import { ManageTopicsPage } from "./flows/manageTopics/page/manageTopicsPage";
import { ManageBankAccountsPage } from "./flows/manamgeBankAccounts/page/manageBankAccountsPage";
import { MockVideoCallPage } from "./flows/meet/page/mockMeet";
import { NotificationsPage } from "./flows/notifications/page/notificationPage";
import { ReviewingPage } from "./flows/reviewing/page/reviewing";
import { SearchPage } from "./flows/search/page/searchPage";
import { SignupPage } from "./flows/signup/page/signupPage";
import UserDetailsPage from "./flows/userDetails/page/userDetails";
import { UpcomingMeetingsPage } from "./flows/UpcomingMeetingsPage/page/upcomingMeetingsPage";
import { HomePage } from "./flows/home/homePage";
import { TopicPage } from "./flows/topic/page/topicPage";
import { ManageTopicsPage2 } from "./flows/manageTopics2/page/manageTopicsPage2";

const App = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SignupPage isSignUp={false} />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/topic" element={<TopicPage />} />
            <Route path="/user-details" element={<UserDetailsPage />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/reviewing" element={<ReviewingPage />} />
            <Route path="/calls-history" element={<CallsHistoryPage />} />
            <Route path="/mock-call" element={<MockVideoCallPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route
              path="/upcoming-meetings"
              element={<UpcomingMeetingsPage />}
            />
            <Route path="/my-topics" element={<ManageTopicsPage />} />
            <Route path="/my-topics2" element={<ManageTopicsPage2 />} />
            <Route
              path="/manage-bank-accounts"
              element={<ManageBankAccountsPage />}
            />
            <Route
              path="/edit-availability"
              element={<EditAvailabilityPage />}
            />
            <Route path="/notifications" element={<NotificationsPage />} />

            <Route path="/become-teacher" element={<BecomeTeacherPage />} />
            <Route path="/earnings" element={<EarningsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
