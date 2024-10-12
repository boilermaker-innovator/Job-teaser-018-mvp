document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobTeaserForm');
    const previewSection = document.getElementById('previewSection');
    const prefillButton = document.getElementById('prefillButton');
    const clearFormButton = document.getElementById('clearFormButton');
    const prefillSelect = document.getElementById('prefillSelect');
    const logoUrlInput = document.getElementById('logoUrl');
    const logoPreviewImg = document.getElementById('logoPreviewImg');

    const jobData = {
        boilermaker: {
            jobTitle: "Boilermaker",
            company: "ELS - Exclusive Labour Services",
            location: "Welshpool",
            logoUrl: "https://i.ibb.co/4s0GW9g/IMG-1259.jpg",
            about: "Join our dynamic team at ELS, where innovation meets opportunity in boilermaking.",
            role: "- Fabricate and repair metal structures\n- Read and interpret technical drawings\n- Ensure safety standards are met",
            requirements: "- Certified Boilermaker\n- 3+ years of experience\n- Strong problem-solving skills",
            benefits: "- Competitive salary\n- Health and dental insurance\n- Professional development opportunities",
            applyUrl: "https://example.com/apply-boilermaker"
        },
        welder: {
            jobTitle: "Welder",
            company: "ELS - Exclusive Labour Services",
            location: "Welshpool",
            logoUrl: "https://i.ibb.co/4s0GW9g/IMG-1259.jpg",
            about: "ELS is seeking skilled welders to join our growing team in Welshpool.",
            role: "- Perform various welding techniques\n- Read and interpret blueprints\n- Maintain welding equipment",
            requirements: "- Certified Welder\n- 2+ years of experience\n- Attention to detail",
            benefits: "- Competitive hourly rate\n- Overtime opportunities\n- Safety equipment provided",
            applyUrl: "https://example.com/apply-welder"
        },
        mechanic: {
            jobTitle: "Mechanic",
            company: "ELS - Exclusive Labour Services",
            location: "Welshpool",
            logoUrl: "https://i.ibb.co/4s0GW9g/IMG-1259.jpg",
            about: "ELS is looking for experienced mechanics to join our maintenance team in Welshpool.",
            role: "- Diagnose and repair equipment\n- Perform preventive maintenance\n- Document all maintenance activities",
            requirements: "- Certified Mechanic\n- 5+ years of experience\n- Strong analytical skills",
            benefits: "- Full benefits package\n- 401(k) with company match\n- Ongoing training opportunities",
            applyUrl: "https://example.com/apply-mechanic"
        }
    };

    function updatePreview() {
        const jobTitle = document.getElementById('jobTitle').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const logoUrl = document.getElementById('logoUrl').value;
        const about = document.getElementById('about').value;
        const role = document.getElementById('role').value;
        const requirements = document.getElementById('requirements').value;
        const benefits = document.getElementById('benefits').value;
        const applyUrl = document.getElementById('applyUrl').value;

        document.getElementById('ogTitle').setAttribute('content', `Job Teaser: ${jobTitle}`);
        document.getElementById('ogDescription').setAttribute('content', `Exciting job opportunity at ${company} in ${location}`);
        document.getElementById('ogImage').setAttribute('content', logoUrl);
        document.getElementById('ogUrl').setAttribute('content', window.location.href);

        document.getElementById('linkedinTitle').setAttribute('content', `Job Teaser: ${jobTitle}`);
        document.getElementById('linkedinDescription').setAttribute('content', `Exciting job opportunity at ${company} in ${location}`);
        document.getElementById('linkedinImage').setAttribute('content', logoUrl);

        document.getElementById('previewTitle').textContent = jobTitle;
        document.getElementById('previewCompanyLocation').textContent = `${company} - ${location}`;
        document.getElementById('previewLogo').src = logoUrl;
        document.getElementById('aboutContent').textContent = about;
        document.getElementById('roleContent').textContent = role;
        document.getElementById('youContent').textContent = requirements;
        document.getElementById('benefitsContent').textContent = benefits;
        document.getElementById('previewApply').href = applyUrl;

        previewSection.style.display = 'block';
    }

    prefillButton.addEventListener('click', function() {
        const selectedJob = prefillSelect.value;
        if (selectedJob && jobData[selectedJob]) {
            const data = jobData[selectedJob];
            for (const [key, value] of Object.entries(data)) {
                const element = document.getElementById(key);
                if (element) {
                    element.value = value;
                }
            }
            logoPreviewImg.src = data.logoUrl;
            updatePreview();
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        updatePreview();
        document.getElementById('debugInfo').innerHTML = '<h3>Debug Information:</h3><p>Teaser generated successfully</p>';
    });

    clearFormButton.addEventListener('click', function() {
        form.reset();
        prefillSelect.value = '';
        logoPreviewImg.src = '';
        previewSection.style.display = 'none';
        document.getElementById('debugInfo').innerHTML = '<h3>Debug Information:</h3><p>Form cleared</p>';
    });

    logoUrlInput.addEventListener('input', function() {
        logoPreviewImg.src = this.value;
    });

    logoPreviewImg.src = logoUrlInput.value;
});
