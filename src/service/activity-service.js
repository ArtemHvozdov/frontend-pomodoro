import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/pomodoro';

const getActivityNames = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/activities`);
        const activities = response.data;

        return activities.map((activity) => activity.name);
    } catch (error) {
        console.error('Error fetching activities:', error);
        return [];
    }
};

export default getActivityNames;
