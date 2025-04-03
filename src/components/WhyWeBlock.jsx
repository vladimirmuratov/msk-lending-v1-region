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
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Широкая сеть партнеров
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Сотрудничаем с ведущими клиниками
                        Москвы, включая многопрофильные и специализированные центры.</Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Индивидуальный подход
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Анализируем потребности пациента и
                        подбираем оптимальные решения.</Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Прозрачность и оперативность
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>Работаем быстро и открыто,
                        предоставляя полную информацию о стоимости и процессе лечения.</Typography>
                </Box>
            </Box>

            <Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
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
                Каждый случай уникален, и здоровье требует внимания и профессионализма. Мы создаем комфортные условия,
                чтобы пациенты могли сосредоточиться на выздоровлении.
                <br />
                С нами качественная медицинская помощь в Москве доступна каждому!
            </Typography>

        </Box>
    );
};
