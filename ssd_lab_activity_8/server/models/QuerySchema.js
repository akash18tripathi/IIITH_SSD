const mongoose = require('mongoose')

let Schema = mongoose.Schema
const QuerySchema = new Schema(
    {
        exam_name: {
            type: String,
            required: true
        },
        course_name: {
            type: String,
            required: true
        },
        question_num: {
            type: Number,
            required: true
        },
        ta_roll: {
            type: String,
            required: true
        },
        std_roll: {
            type: String,
            required: true
        },
        ta_comment: {
            type: String,
        },
        std_comment: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },

    },
    { timestamps: true }
)

const Query = mongoose.model('Query', QuerySchema)

module.exports = Query
