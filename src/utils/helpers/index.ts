import path from 'path';

export abstract class Helper {
  static capitalize(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static shortStringGenerate(value: string, end: number = 2): string {
    return value.substring(0, end).toUpperCase();
  }

  static pluck(array: any[], property: any): any[] {
    return array.map((item) => item[property]);
  }

  static stringUniqueName(value: string | null): string | null {
    if (value === null) return null;

    value = value.toLowerCase();
    value = this.removeAccents(value);
    value = this.removeSpecialCharacters(value);

    return value.replace(/[\s-]+/g, '-');
  }

  static removeAllSpaces(value: string): string {
    return value.replace(/\s+/g, '');
  }

  static removeSpecialCharacters(value: string | null): string | null {
    if (value === null) return null;
    return value.replace(/[^A-Za-z0-9 ]/g, '');
  }

  static removeAccents(value: string | null): string | null {
    if (value === null) return null;

    const accentsMap: { [key: string]: string } = {
      À: 'a',
      Á: 'a',
      Ã: 'a',
      Â: 'a',
      É: 'e',
      Ê: 'e',
      Í: 'i',
      Ó: 'o',
      Õ: 'o',
      Ô: 'o',
      Ú: 'u',
      Ü: 'u',
      Ç: 'c',
      à: 'a',
      á: 'a',
      ã: 'a',
      â: 'a',
      é: 'e',
      ê: 'e',
      í: 'i',
      ó: 'o',
      õ: 'o',
      ô: 'o',
      ú: 'u',
      ü: 'u',
      ç: 'c',
    };

    return value
      .split('')
      .map((char) => accentsMap[char] || char)
      .join('');
  }

  static generateRandomAlphanumeric(length: number = 6): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  static getMailTemplatePath(templateName: string): string {
    return path.resolve(
      process.cwd(),
      'src',
      'mail',
      'presentation',
      'templates',
      templateName,
    );
  }

  static standardizeFilename(filename: string): string {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return filename;

    const name = filename.substring(0, lastDotIndex);
    const extension = filename.substring(lastDotIndex);

    const standardized = name.trim().toLowerCase().replace(/\s+/g, '-');

    return `${standardized}${extension}`;
  }
}
