(function (root) {
    const collegeDefinitions = [
        { value: 'COLCOMP', label: 'COLCOMP' },
        { value: 'COLNAS', label: 'COLNAS' },
        { value: 'COLENG', label: 'COLENG' },
        { value: 'COLENVS', label: 'COLENVS' },
        { value: 'COLFAST', label: 'COLFAST' },
        { value: 'COLMANS', label: 'COLMANS' }
    ];

    

    const programmeCatalog = {
    COLCOMP: {
        'Computer Science': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'MTH101' },
                    { code: 'COS101' },
                    { code: 'BUT_GST107' },
                    { code: 'BUT_BIO101' },
                    { code: 'STA111' },
                    { code: 'BUT_ICT131' },
                    { code: 'PHY101' }
                ],
                'Second': [
                    { code: 'MTH102' },
                    { code: 'COS102' },
                    { code: 'GST112' },
                    { code: 'BUT_BIO102' },
                    { code: 'BUT_ICT118' },
                    { code: 'BUT_CSC104' },
                    { code: 'PHY102' }
                ]
            },
            '200': {
                'First': [
                    { code: 'ENT211' },
                    { code: 'MTH201' },
                    { code: 'COS201' },
                    { code: 'BUT_GST207' },
                    { code: 'IFT211' },
                    { code: 'SEN201' },
                    { code: 'IFT203' },
                    { code: 'COS203' },
                    { code: 'BUT_ICT235' },
                    { code: 'BUT_CSC205' }
                ],
                'Second': [
                    { code: 'GST212' },
                    { code: 'MTH202' },
                    { code: 'COS202' },
                    { code: 'IFT212' },
                    { code: 'INS202' },
                    { code: 'BUT_CSC204' },
                    { code: 'BUT_CSC206' },
                    { code: 'BUT_CSC208' },
                    { code: 'BUT_GST208' },
                    { code: 'BUT_ICT236' }
                ]
            },
            '300': {
                'First': [
                    { code: 'CSC301' },
                    { code: 'CSC309' },
                    { code: 'CYB201' },
                    { code: 'ICT305' },
                    { code: 'SEN301' },
                    { code: 'BUT_CSC303' },
                    { code: 'BUT_CSC311' },
                    { code: 'BUT_ICT323' }
                ],
                'Second': [
                    { code: 'GST312' },
                    { code: 'ENT312' },
                    { code: 'CSC308' },
                    { code: 'CSC322' },
                    { code: 'DTS304' },
                    { code: 'IFT302' },
                    { code: 'BUT_CSC304' },
                    { code: 'BUT_ICT324' }
                ]
            },
            '400': {
                'First': [
                    { code: 'COS409' },
                    { code: 'CSC401' },
                    { code: 'INS401' },
                    { code: 'CSC402' },
                    { code: 'BUT_CSC407' },
                    { code: 'BUT_CSC403' },
                    { code: 'BUT_CSC405' },
                    { code: 'BUT_CSC409' },
                    { code: 'BUT_ICT423' }
                ]
            },
            '500': {
                'First': [
                    { code: 'BUT_CSC501' },
                    { code: 'BUT_CSC515' },
                    { code: 'BUT_IFT509' },
                    { code: 'BUT_CSC505' },
                    { code: 'BUT_CSC503' },
                    { code: 'BUT_CSC507' },
                    { code: 'BUT_CSC509' },
                    { code: 'BUT_CSC513' },
                    { code: 'BUT_ICT521' }
                ],
                'Second': [
                    { code: 'BUT_IFT502' },
                    { code: 'BUT_SEN510' },
                    { code: 'BUT_CSC504' },
                    { code: 'CYB404' },
                    { code: 'DTS316' },
                    { code: 'BUT_ICT522' }
                ]
            }
        },

        'Information Technology': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'MTH101' },
                    { code: 'COS101' },
                    { code: 'BUT_GST107' },
                    { code: 'BUT_BIO101' },
                    { code: 'STA111' },
                    { code: 'BUT_ICT131' },
                    { code: 'PHY101' }
                ],
                'Second': [
                    { code: 'MTH102' },
                    { code: 'COS102' },
                    { code: 'GST112' },
                    { code: 'BUT_BIO102' },
                    { code: 'BUT_ICT118' },
                    { code: 'BUT_CSC104' },
                    { code: 'PHY102' }
                ]
            },
            '200': {
                'First': [
                    { code: 'ENT211' },
                    { code: 'MTH201' },
                    { code: 'COS201' },
                    { code: 'COS203' },
                    { code: 'IFT203' },
                    { code: 'IFT205' },
                    { code: 'IFT211' },
                    { code: 'SEN201' },
                    { code: 'BUT_ICT235' },
                    { code: 'BUT_GST207' }
                ],
                'Second': [
                    { code: 'GST212' },
                    { code: 'MTH202' },
                    { code: 'COS202' },
                    { code: 'IFT212' },
                    { code: 'INS202' },
                    { code: 'INS204' },
                    { code: 'BUT_CSC206' },
                    { code: 'BUT_CSC208' },
                    { code: 'BUT_GST208' },
                    { code: 'BUT_ICT236' }
                ]
            },
            '300': {
                'First': [
                    { code: 'CSC301' },
                    { code: 'CSC309' },
                    { code: 'CYB201' },
                    { code: 'ICT305' },
                    { code: 'SEN301' },
                    { code: 'BUT_BIO209' },
                    { code: 'BUT_IFT301' },
                    { code: 'BUT_CSC311' },
                    { code: 'BUT_ICT323' }
                ],
                'Second': [
                    { code: 'GST312' },
                    { code: 'ENT312' },
                    { code: 'IFT302' },
                    { code: 'IFT304' },
                    { code: 'IFT342' },
                    { code: 'CSC308' },
                    { code: 'IFT308' },
                    { code: 'BUT_CSC304' },
                    { code: 'BUT_ICT324' }
                ]
            },
            '400': {
                'First': [
                    { code: 'COS409' },
                    { code: 'IFT403' },
                    { code: 'INS401' },
                    { code: 'CSC432' },
                    { code: 'BUT_IFT405' },
                    { code: 'BUT_CSC407' },
                    { code: 'BUT_CSC411' },
                    { code: 'BUT_ICT423' }
                ]
            },
            '500': {
                'First': [
                    { code: 'BUT_CSC501' },
                    { code: 'BUT_IFT503' },
                    { code: 'BUT_CSC505' },
                    { code: 'BUT_IFT507' },
                    { code: 'BUT_IFT509' },
                    { code: 'BUT_IFT515' },
                    { code: 'BUT_IFT513' },
                    { code: 'BUT_ICT521' }
                ],
                'Second': [
                    { code: 'IFT310' },
                    { code: 'IFT322' },
                    { code: 'IFT410' },
                    { code: 'IFT442' },
                    { code: 'BUT_IFT502' },
                    { code: 'BUT_IFT506' },
                    { code: 'BUT_IFT512' },
                    { code: 'BUT_ICT522' }
                ]
            }
        },

        'Cyber Security': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'MTH101' },
                    { code: 'COS101' },
                    { code: 'PHY101' }
                ],
                'Second': [
                    { code: 'MTH102' },
                    { code: 'COS102' },
                    { code: 'PHY102' }
                ]
            }
        },

        'Software Engineering': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'MTH101' },
                    { code: 'COS101' },
                    { code: 'PHY101' }
                ],
                'Second': [
                    { code: 'MTH102' },
                    { code: 'COS102' },
                    { code: 'PHY102' }
                ]
            }
        },

        'Data Science': {}
    },

    COLENG: {
        'Electrical Engineering': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'MTH101' },
                    { code: 'BUT_ICT131' },
                    { code: 'BUT_BIO101' }
                ],
                'Second': [
                    { code: 'BUT_CSC104' },
                    { code: 'BUT_BIO102' },
                    { code: 'BUT_ICT118' }
                ]
            }
        },

        'Mechanical Engineering': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'MTH101' },
                    { code: 'BUT_ICT131' },
                    { code: 'BUT_BIO101' }
                ],
                'Second': [
                    { code: 'BUT_CSC104' },
                    { code: 'BUT_BIO102' },
                    { code: 'BUT_ICT118' }
                ]
            }
        },

        'Agricultural and Biosystems Engineering': {},

        'Biomedical Engineering': {},

        'Mechatronics Engineering': {},

        'Civil Engineering': {},

        'Computer Engineering': {},

        'Electrical, Electronics Engineering': {},

        'Telecommunications Engineering': {}
    },

    COLENVS: {
        'Environmental Science': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'BUT_GST107' }
                ],
                'Second': [
                    { code: 'PHY102' },
                    { code: 'GST112' },
                    { code: 'GST102' }
                ]
            }
        },

        'Architecture': {},

        'Building Technology': {},

        'Estate Management': {},

        'Quantity Surveying': {},

        'Surveying and Geoinformatics': {},

        'Urban and Regional Planning': {},

        'Environmental Management': {}
    },

    COLFAST: {
        'Food Science': {
            '100': {
                'First': [
                    { code: 'GST111' },
                    { code: 'BUT_GST107' }
                ],
                'Second': [
                    { code: 'GST102' }
                ]
            }
        },

        'Food Technology': {},

        'Nutrition and Dietetics': {},

        'Agriculture and Agricultural Technology': {}
    },

    COLNAS: {
        'Applied Mathematics': {},

        'Statistics': {},

        'Physics with Electronics': {},

        'Applied Geophysics': {},

        'Medical Physics': {},

        'Microbiology': {},

        'Biochemistry': {},

        'Industrial Chemistry': {},

        'Biotechnology': {}
    },

    COLMANS: {
        'Business Administration': {
            '200': {
                'First': [
                    { code: 'MTH103' },
                    { code: 'ACC101' }
                ]
            }
        },

        'Human Resource Management': {},

        'Marketing': {},

        'Accounting': {},

        'Economics': {},

        'Finance and Banking': {},

        'Project Management': {},

        'Transport Management': {}
    }
};

    function getCollegeOptions() {
        return collegeDefinitions.map(college => ({ value: college.value, label: college.label }));
    }

    function getProgrammeOptions(college) {
        const collegeProgrammes = college ? programmeCatalog[college] || {} : programmeCatalog;
        return Object.keys(collegeProgrammes)
            .sort((a, b) => a.localeCompare(b))
            .map(value => ({ value, label: value }));
    }

    function getLevelOptions(college, programme) {
        const levels = programmeCatalog[college]?.[programme] || {};
        return Object.keys(levels)
            .sort((a, b) => a.localeCompare(b))
            .map(value => ({ value, label: `${value} Level` }));
    }

    function getSemesterOptions(college, programme, level) {
        const semesters = programmeCatalog[college]?.[programme]?.[level] || {};
        return Object.keys(semesters)
            .sort((a, b) => a.localeCompare(b))
            .map(value => ({ value, label: `${value} Semester` }));
    }

    function getCourseOptions({ college, programme, level, semester, sourceCodes = [] }) {
        const courses = programmeCatalog[college]?.[programme]?.[level]?.[semester] || [];
        return courses
            .filter(item => !sourceCodes.length || sourceCodes.includes(item.code))
            .map(item => ({
                code: item.code,
                college,
                programme,
                level,
                semester,
                colleges: [college],
                programmes: [programme]
            }))
            .sort((a, b) => a.code.localeCompare(b.code));
    }

    function getCourseEntry(code) {
        const colleges = new Set();
        const programmes = new Set();
        let level = '';
        let semester = '';

        Object.entries(programmeCatalog).forEach(([collegeKey, collegeProgrammes]) => {
            Object.entries(collegeProgrammes).forEach(([programmeName, levels]) => {
                Object.entries(levels).forEach(([levelKey, semesters]) => {
                    Object.entries(semesters).forEach(([semesterKey, courses]) => {
                        if (courses.some(item => item.code === code)) {
                            colleges.add(collegeKey);
                            programmes.add(programmeName);
                            if (!level) level = levelKey;
                            if (!semester) semester = semesterKey;
                        }
                    });
                });
            });
        });

        if (!colleges.size) {
            return null;
        }

        return {
            code,
            colleges: Array.from(colleges),
            programmes: Array.from(programmes),
            college: Array.from(colleges)[0],
            programme: Array.from(programmes)[0],
            level,
            semester
        };
    }

    function matchesCourseAffiliation(item, college, programme) {
        const itemProgrammes = Array.isArray(item?.programmes) ? item.programmes : item?.programme ? [item.programme] : [];
        const itemColleges = Array.isArray(item?.colleges) ? item.colleges : item?.college ? [item.college] : [];
        const collegeMatch = !college || itemColleges.includes(college);
        const programmeMatch = !programme || itemProgrammes.includes(programme);
        return collegeMatch && programmeMatch;
    }

    const api = {
        getCollegeOptions,
        getProgrammeOptions,
        getLevelOptions,
        getSemesterOptions,
        getCourseOptions,
        getCourseEntry,
        matchesCourseAffiliation,
        getAllCourses: () => {
            const allCourses = [];
            Object.entries(programmeCatalog).forEach(([collegeKey, collegeProgrammes]) => {
                Object.entries(collegeProgrammes).forEach(([programmeName, levels]) => {
                    Object.entries(levels).forEach(([levelKey, semesters]) => {
                        Object.entries(semesters).forEach(([semesterKey, courses]) => {
                            courses.forEach(course => {
                                if (!allCourses.some(item => item.code === course.code)) {
                                    allCourses.push({ code: course.code, college: collegeKey, programme: programmeName, level: levelKey, semester: semesterKey });
                                }
                            });
                        });
                    });
                });
            });
            return allCourses;
        }
    };

    root.StudyHubCatalog = api;
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);