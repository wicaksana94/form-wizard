# My Solution

Hi! thanks for visit this solution file, I will explain **my solution**. The app was so simple at the first glance. But, if we check the detail of the form where it is a core feature of this app it is not so simple at we look.


# The Tech Stack

I use **Vue.js** version 2.6.14 for the main framework. For styling, I use pure **CSS** inside the component scoped. To handle routing, I use **vue-router** version 3.5.1. I also use **sweetalert2** to make alert and confirmation popup looks good. I also add a little fade-in animation to bring "classy and eye catchy" experiences, I hope the user will like it!

# The Approach

- **Page 1**
I set the page as root in vue-router. It contains welcoming screen with button **Start** . When user click it, the app will redirect to Page 2 (the form).

- **Page 2**
This page is the main course of the app. It contains a user register form. The page will collect some information from user input, like `name`, `age`, `country`, and `selected insurance package`. If user has fill all the input, we will see a label component which do automated calculation for the premium based on formula and user inputs. 
At the bottom, we have 2 buttons. **Back** is a button to bring user back to Page 1, and **Next** button that redirect user to Page 3 for summary and final step of the journey where user can see the summary and proceed to buy. But, if user `age` is over 100, we direct him to `Page 2 - age error`.

- **Page 3**
Page is is the last page. In this page user can see summary of his input at Page 2. At the bottom, user can choose to **Back** or  **Buy**. If user wants to change the register data, click the  **Back** button, the confirmation popup will show, click **Yes, back**, so, the user can fill the form again. Otherwise user can click **Buy** button and confirmation popup will show, click **Yes, buy!** to buy selected insurace package. Then click **Ok** to continue, it will redirect user to Page 1.