import MainLayout from "@/component/Layout/MainLayout";
import ButtonFour from "@/component/Reuseable/Buttons/Button2";


export default function PrivacyPolicyPage() {

    return (
        <MainLayout>
            <div class="container mx-auto px-4 py-8 lg:px-36 md:w-[70%] ">
                <h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p class="text-lg mb-4">At [Your Blog Name], we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.</p>
                <h2 class="text-xl font-bold mb-2">Information We Collect</h2>
                <p class="text-lg mb-4">We may collect certain personal information that you voluntarily provide to us when you:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Subscribe to our newsletter</li>
                    <li>Leave comments on our blog posts</li>
                    <li>Contact us through our contact form</li>
                </ul>
                <p class="text-lg mb-4">The information we collect may include your name, email address, and any other details you choose to provide.</p>
                <h2 class="text-xl font-bold mb-2">How We Use Your Information</h2>
                <p class="text-lg mb-4">We use the collected information to:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Send you our newsletter or other requested information</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Improve and personalize your experience on our website</li>
                </ul>
                <p class="text-lg mb-4">We do not share your personal information with third parties unless required by law or with your explicit consent.</p>
                <h2 class="text-xl font-bold mb-2">Data Security</h2>
                <p class="text-lg mb-4">We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure.</p>
                <h2 class="text-xl font-bold mb-2">Your Rights</h2>
                <p class="text-lg mb-4">You have the right to:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Access, update, or delete your personal information</li>
                    <li>Opt-out of receiving our newsletter or marketing emails</li>
                    <li>Withdraw your consent for the processing of your data</li>
                </ul>
                <p class="text-lg mb-4">To exercise these rights or if you have any questions or concerns regarding our Privacy Policy, please contact us using the information provided below.</p>
                <h2 class="text-xl font-bold mb-2">Contact Us</h2>
                <p class="text-lg mb-4">If you have any questions or suggestions regarding our Privacy Policy, please contact us at:</p>
                <p class="text-lg mb-4">[Your Blog Name]</p>
                <p class="text-lg mb-4">[Your Contact Information]</p>
            </div>
        </MainLayout>
    )
} 