import { mapState } from 'vuex';

export default {
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    objData: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  computed: {
    ...mapState('baseinfo', [
      'genderOptions',
      'politicalOptions',
      'peopleOptions',
      'marriageOptions',
      'educationOptions',
      'degreeOptions',
      'jobOptions',
      'learningTypeOptions'
    ])
  },
  methods: {
    handlePrev() {
      this.$emit('prev');
    },
    handleNext(data = {}) {
      this.$emit('next', data);
    },
    generateId(prefix = 'id', separator = '_') {
      const random_date = new Date().getTime().toString(16).slice(2, 8);
      const random_nums = Math.random().toString(16).slice(2, 8);
      return `${prefix}${separator}${random_date}${separator}${random_nums}`;
    }
  }
};
