# React Custom Hook using typescript
# custom Hook to show notifications when button is pressed
## the main hook is useNotification.tsx
All types have been added to make sure that each notification can be triggered safely
### Couple of separate types of notifications provided
Check allowed notification types mentioned in useNotification
Enum is declared with the allow notification types and colors
color changes depending on Notification type
## Framer Motion used to add entry and exit animation

#### Features that needed to be added next
1. if User clicks on addning notification button before timer clears --> manage this situation
    --> desired outcome : the previous notification translates up allowing space for the current
    notification to take its place
    A separate component called Notification Queue might be required to maintain this state
    React Redux or Context might also be required to make sure this state is available throughout the app

2. We should also be able to dismiss the notifications by pressing a "x" button on the notification itself , before the timer clears. Add this feature

3. Allow users to initialize Notification queue seperately where they can define - what is the maxnumber of notifications that can be shown at a time, maybe also add a debounce function to provide input to the user that they have reached max notification count and further operations will only be allowed after "x" seconds that the user had initialized , till the time the Notification queue clears and space is available. Typescript classes can be used here . Check for use case