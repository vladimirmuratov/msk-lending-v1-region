import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
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
                Почему выбирают нас?
            </Typography>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Широкая сеть партнеров
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Мы сотрудничаем с ведущими
                        медицинскими центрами Москвы, включая многопрофильные и специализированные клиники.</Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Индивидуальный подход
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Мы детально изучаем потребности
                        каждого пациента и предлагаем оптимальные решения.</Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Прозрачность и оперативность
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Мы работаем быстро, четко и открыто,
                        предоставляя всю необходимую информацию о стоимости и процессе лечения.</Typography>
                </Box>
            </Box>

            <Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Квалифицированная команда
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Наши специалисты имеют большой опыт в
                        медицинской логистике и организации лечения.</Typography>
                </Box>
            </Box>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    marginTop: '25px'
                }}
            >
                Мы понимаем, что каждый случай уникален, и забота о здоровье требует максимального внимания и
                профессионализма. Наша задача — создать комфортные условия, чтобы пациенты могли сосредоточиться на
                главном — восстановлении здоровья.
                <br />
                С нами качественная медицинская помощь в Москве становится ближе!
            </Typography>

        </Box>
    );
};
