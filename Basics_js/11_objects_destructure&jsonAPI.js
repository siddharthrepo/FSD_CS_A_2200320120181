const course = {
    coursename : "JSInHindi",
    price:"999",
    courseInstructor : "Hitesh"
}
// course.courseInstructor  it is big name to access so we destructure it

const {courseInstructor: instructor} = course

console.log(instructor)

