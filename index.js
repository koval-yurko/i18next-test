const { serverSideTranslations } = require('next-i18next/serverSideTranslations');
const path = require('path');
const fs = require('fs');

function writeLocale(locale, data) {
    const filePath = `./public/full-locales/${locale}/common.json`;
    const parentFolder = path.dirname(filePath);

    if (!fs.existsSync(parentFolder)) {
        fs.mkdirSync(parentFolder, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const main = async () => {
    const res = await serverSideTranslations('en', ['common', 'main', '@resourcify/ui/common']);
    writeLocale('en', res._nextI18Next.initialI18nStore.en);

    const res2 = await serverSideTranslations('fr', ['common', 'main', '@resourcify/ui/common']);
    writeLocale('fr', res2._nextI18Next.initialI18nStore.fr);
};

main()
