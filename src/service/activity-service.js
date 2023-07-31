import axios from 'axios';
import getCookie from "../utility/cookie-utility";

const API_BASE_URL = 'http://localhost:8080/api/v1/pomodoro';

const getActivityNames = async () => {
    try {
        const token = getCookie('Authorization');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get(`${API_BASE_URL}/activities`, config);
        const activities = response.data;

        return activities.map((activity) => activity.name);
    } catch (error) {
        console.error('Error fetching activities:', error);
        return [];
    }
};

export default getActivityNames;
