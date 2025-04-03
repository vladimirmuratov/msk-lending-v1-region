import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2" sx={{
                color: 'var(--main-color)',
                marginBottom: '20px',
                fontSize: { xs: '28px', sm: '34px' },
                fontWeight: 500
            }}>
                Госпитализация в московскую клинику из регионов
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная
                    Компания (МСК)</Box> обеспечивает госпитализацию в московские клиники из регионов с полным сопровождением.
                Мы организуем
                транспортировку по всей России и СНГ, встречаем пациентов на вокзалах и в аэропортах, а также
                предоставляем помощь бригад скорой помощи.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Наш приоритет – комфорт, безопасность и оперативность на всех этапах госпитализации. Мы гарантируем
                высокое качество лечения и круглосуточную заботу о вашем здоровье, где бы вы ни находились.
            </Typography>
        </Box>
    );
};
