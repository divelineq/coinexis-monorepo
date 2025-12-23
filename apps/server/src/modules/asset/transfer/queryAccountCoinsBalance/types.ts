export enum WithBonus {
	NO,
	YES,
}

export type AccountBalanceParams = {
	memberId?: string; // ID пользователя
	accountType: string; // Тип аккаунта
	coin?: string; // Валюта(ы) заглавными
	withBonus?: WithBonus; // Включить бонус
};

type CoinBalance = {
	coin: string; // Валюта
	walletBalance: string; // Баланс кошелька
	transferBalance: string; // Переводимый баланс
	bonus: string; // Бонус
};

export type AccountBalanceResponse = {
	accountType: string; // Тип аккаунта
	memberId: string; // ID пользователя
	balance: CoinBalance[]; // Массив балансов
};
