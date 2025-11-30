import supabase from './config/supabase.js';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
    console.log('Testing Supabase Connection...\n');

    try {
        const { data, error } = await supabase.getSession();

        console.log('Supabase connection successful!');
        console.log('Connected to:', process.env.SUPABASE_URL);
        console.log('\n Ready to create database tables!');

        
    } catch (err) {
        console.log('Connection failed!');
        console.log('Error:', err.message);
        console.log('\nCheck your .env file:');
        console.log('SUPABASE_URL is set correctly');
        console.log('SUPABASE_KEY is set correctly');
    }
};

testConnection();