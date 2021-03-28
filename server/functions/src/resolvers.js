const admin = require('firebase-admin');

const resolvers = {
    Query: {
        reminders: () => {
            return admin.database()
                .ref("reminders")
                .once("value")
                .then((snap) => {
                    console.log(snap.val())
                    return snap.val()
                })
                .then((val) => {
                    console.log(val)
                    return Object.keys(val).map((key) => val[key])
                })
        }
    },
    Mutation: {
        addReminder: async (_,{input}) =>{
            const reminder = {
                name: input.name,
                description: input.description,
                date: input.date,
                time: input.time
            }
            console.log(input );
            return admin.database()
            .ref(`reminders`)
            .child(input.name)
            .set(reminder)
            .then(() => {
                return reminder})
            
        }
    }
}

module.exports = resolvers;